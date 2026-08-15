# QuizOmDengang – Neon + Cloudflare

Denne version er ændret fra Supabase til PostgreSQL på Neon.

## Arkitektur

- Next.js / React / TypeScript: selve hjemmesiden
- Neon: PostgreSQL-database
- Cloudflare: hosting/deployment
- Dit .dk-domæne: kobles til Cloudflare
- Excel/XLSX: import af quizzer

## Start lokalt

1. Installer Node.js.
2. Kør `npm install`.
3. Opret en Neon-database.
4. Kør `database.sql` i Neon SQL Editor.
5. Opret `.env.local` med:

DATABASE_URL=din_neon_connection_string
AUTH_SECRET=en_lang_tilfældig_hemmelig_nøgle

6. Kør `npm run dev`.

## Excel-import

Admin-siden `/admin` accepterer Excel-filer med disse kolonner:

Quiztitel
Beskrivelse
Kategori
Underkategori
Tidsperiode
Sværhedsgrad
Spørgsmål
Svar A
Svar B
Svar C
Svar D
Korrekt svar
Forklaring
Kilde
Kildedato
Avis
Avisdato
Side
Quiztype

Importen validerer filen og gemmer quizzer og spørgsmål i Neon.

## Cloudflare

Projektet indeholder en grundlæggende `wrangler.toml`.

Bemærk: Next.js med serverfunktioner og databaseforbindelser kræver en passende Cloudflare Workers/Next.js deployment-konfiguration. Den endelige deployment bør testes på Cloudflare, før produktion.

## Vigtigt

Denne version har databaseintegration til Excel-import, men komplet bruger-login, password hashing, sessions, server-side scoring, ranglisteberegning og fuld admin-autorisation skal stadig færdiggøres, før siden åbnes offentligt.
