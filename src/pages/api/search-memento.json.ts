import type { APIRoute } from 'astro';
import { createClient } from '@supabase/supabase-js';

// Créer le client Supabase directement dans l'API
const supabaseUrl = import.meta.env.PUBLIC_SUPABASE_URL || process.env.PUBLIC_SUPABASE_URL;
const supabaseKey = import.meta.env.PUBLIC_SUPABASE_ANON_KEY || process.env.PUBLIC_SUPABASE_ANON_KEY;

if (!supabaseUrl || !supabaseKey) {
  console.error('[SEARCH] Missing Supabase credentials');
}

const supabase = createClient(supabaseUrl!, supabaseKey!);

export const GET: APIRoute = async ({ url }) => {
  const slug = url.searchParams.get('slug');
  const query = url.searchParams.get('query');

  if (!slug || !query || query.length < 2) {
    return new Response(
      JSON.stringify({ results: [] }),
      {
        status: 200,
        headers: { 'Content-Type': 'application/json' },
      }
    );
  }

  try {
    console.log('[SEARCH] Starting search for:', { slug, query });

    // Récupérer tous les chapitres du mémento
    const { data: chapters, error } = await supabase
      .from('memento_contents')
      .select('id, chapter_number, chapter_title, content_markdown')
      .eq('memento_slug', slug)
      .order('sort_order', { ascending: true });

    console.log('[SEARCH] Supabase response:', {
      chaptersCount: chapters?.length,
      error: error?.message
    });

    if (error) {
      console.error('Erreur Supabase:', error);
      return new Response(
        JSON.stringify({ results: [], error: error.message }),
        {
          status: 500,
          headers: { 'Content-Type': 'application/json' },
        }
      );
    }

    if (!chapters || chapters.length === 0) {
      return new Response(
        JSON.stringify({ results: [] }),
        {
          status: 200,
          headers: { 'Content-Type': 'application/json' },
        }
      );
    }

    // Fonction pour échapper les caractères regex
    const escapeRegex = (str: string): string => {
      return str.replace(/[.*+?^${}()|[\]\\]/g, '\\$&');
    };

    // Chercher dans chaque chapitre
    const searchRegex = new RegExp(escapeRegex(query), 'gi');
    const results: { chapterId: string; chapterTitle: string; chapterNumber: number; count: number }[] = [];

    chapters.forEach((chapter) => {
      if (!chapter.content_markdown) return;

      const matches = chapter.content_markdown.match(searchRegex);
      if (matches && matches.length > 0) {
        results.push({
          chapterId: chapter.id,
          chapterTitle: chapter.chapter_title,
          chapterNumber: chapter.chapter_number,
          count: matches.length,
        });
      }
    });

    return new Response(
      JSON.stringify({ results }),
      {
        status: 200,
        headers: { 'Content-Type': 'application/json' },
      }
    );
  } catch (error) {
    console.error('Erreur lors de la recherche:', error);
    return new Response(
      JSON.stringify({ results: [] }),
      {
        status: 500,
        headers: { 'Content-Type': 'application/json' },
      }
    );
  }
};
