export default async () => {
  const token = process.env.TMDB_API_TOKEN;

  const url =
    'https://api.themoviedb.org/3/discover/movie' +
    '?include_adult=false' +
    '&include_video=false' +
    '&language=en-US' +
    '&page=1' +
    '&sort_by=popularity.desc' +
    '&with_genres=27';

  try {
    const response = await fetch(url, {
      headers: {
        accept: 'application/json',
        Authorization: `Bearer ${token}`,
      },
    });

    if (!response.ok) {
      return new Response(
        JSON.stringify({
          error: 'TMDB request failed',
          status: response.status,
        }),
        {
          status: response.status,
          headers: {
            'Content-Type': 'application/json',
          },
        }
      );
    }

    const data = await response.json();

    return new Response(JSON.stringify(data), {
      status: 200,
      headers: {
        'Content-Type': 'application/json',
      },
    });
  } catch {
    return new Response(
      JSON.stringify({
        error: 'Something went wrong',
      }),
      {
        status: 500,
        headers: {
          'Content-Type': 'application/json',
        },
      }
    );
  }
};