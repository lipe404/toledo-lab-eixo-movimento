import type { Metadata } from 'next';
import './globals.css';

export const metadata: Metadata = {
  title: 'Eixo Movimento | Projeto conceitual',
  description: 'Uma experiência conceitual de fisioterapia e movimento.',
  robots: { index: false, follow: true }
};

export default function Layout({ children }: Readonly<{ children: React.ReactNode }>) {
  return <html lang="pt-BR"><body>{children}</body></html>;
}
