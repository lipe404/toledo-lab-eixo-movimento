'use client';

import { useState } from 'react';

const photos = process.env.NEXT_PUBLIC_BASE_PATH ?? '';

const steps = [
  {label:'Antes', text:'Na simulação, você escolhe qual assunto quer conversar primeiro. Nenhum relato pessoal é solicitado.'},
  {label:'Durante', text:'Veja como o site apresentaria a conversa inicial, o tempo reservado para perguntas e a explicação do serviço.'},
  {label:'Depois', text:'A página conceitual mostra onde entraria um resumo da conversa. Nenhum documento ou dado é criado nesta demo.'},
];
const paths = [
  { title: 'Movimento no dia a dia', index: '01', tag: 'ROTINA', heading: 'A rotina também é movimento.', description: 'Explore como uma clínica poderia apresentar seu atendimento a quem quer conversar sobre tarefas, hábitos e objetivos do dia a dia.', points: ['Contexto de vida e rotina', 'Objetivos em linguagem simples', 'Apresentação do acompanhamento'] },
  { title: 'Retorno ao esporte', index: '02', tag: 'ESPORTE', heading: 'Cada esporte tem seu ritmo.', description: 'Veja uma jornada conceitual para apresentar serviços a quem deseja conversar com um profissional sobre a volta a uma prática esportiva.', points: ['Histórico da prática esportiva', 'Discussão de objetivos', 'Acompanhamento individual'] },
  { title: 'Reabilitação', index: '03', tag: 'CUIDADO', heading: 'Um plano começa pela escuta.', description: 'Conheça um exemplo de como uma clínica pode explicar as etapas de seu atendimento e deixar o primeiro contato mais claro.', points: ['Escuta inicial', 'Explicação das etapas', 'Organização do acompanhamento'] },
];

function MotionArt() {
  return <svg className="motion-art" width="720" height="630" viewBox="0 0 720 630" role="img" aria-label="Ilustração geométrica de uma pessoa em movimento, com círculos marcando o percurso">
    <defs>
      <pattern id="grid" width="48" height="48" patternUnits="userSpaceOnUse"><path d="M 48 0 L 0 0 0 48" fill="none" stroke="#fdffe7" strokeOpacity=".13" /></pattern>
    </defs>
    <rect width="720" height="630" fill="#174258" />
    <rect width="720" height="630" fill="url(#grid)" />
    <circle className="orbit" cx="380" cy="320" r="241" fill="none" stroke="#bcd7db" strokeOpacity=".5" strokeDasharray="4 8" />
    <circle cx="380" cy="320" r="192" fill="none" stroke="#bcd7db" strokeOpacity=".3" />
    <circle cx="380" cy="320" r="134" fill="#23576b" />
    <path d="M119 499C184 362 313 249 545 142" stroke="#faff9c" strokeWidth="2" fill="none" opacity=".6" />
    <g className="figure">
      <circle cx="435" cy="167" r="35" fill="#f7ffd6" />
      <path d="m394 230-77 106 90 40 104 122M317 336l-23 119-127 43M397 228l107 64 67-45M390 238l-101 12-75 67" fill="none" stroke="#f7ffd6" strokeWidth="25" strokeLinecap="round" strokeLinejoin="round" />
      <circle cx="319" cy="334" r="18" fill="#efff77" /><circle cx="406" cy="376" r="13" fill="#efff77" /><circle cx="291" cy="457" r="13" fill="#efff77" />
    </g>
    <circle cx="143" cy="455" r="7" fill="#efff77" /><circle cx="556" cy="138" r="7" fill="#efff77" />
  </svg>;
}

export default function Page() {
  const [active, setActive] = useState(0);
  const [step, setStep] = useState(0);
  const path = paths[active];
  return <>
    <a className="skip" href="#conteudo">Pular para o conteúdo</a>
    <header><a className="brand" href="#inicio"><b aria-hidden="true">✳</b> EIXO<span>MOVIMENTO</span></a><nav aria-label="Menu principal"><a href="#jornadas">Jornadas</a><a href="#metodo">Método</a><a href="#sobre">Sobre a demo</a></nav></header>
    <main id="conteudo" tabIndex={-1}>
      <section className="hero" id="inicio">
        <div className="hero-copy"><p className="overline">FISIOTERAPIA <b>·</b> CONCEITO DE MARCA</p><h1>O corpo<br/>em <em>movimento.</em></h1><p className="intro">Um conceito de clínica que coloca a escuta, os objetivos e a clareza no centro do cuidado.</p><a className="action" href="#jornadas">Explorar jornadas</a></div>
        <figure className="hero-visual"><img src={photos+'/hero.webp'} alt="Atleta em posição de movimento numa pista de corrida" width="1200" height="900" fetchPriority="high"/><span className="annotation"><span aria-hidden="true">⊕</span> MOVIMENTO · ESCUTA · CONTEXTO</span></figure>
      </section>
      <section className="paths" id="jornadas" aria-labelledby="path-title">
        <div className="paths-heading"><p className="overline">EXPERIÊNCIA INTERATIVA</p><h2 id="path-title">Pontos de partida.</h2><p>Selecione uma opção para explorar a proposta de atendimento.</p></div>
        <div className="path-grid">
          <div className="path-options" role="group" aria-label="Escolher uma jornada">
            {paths.map((item, i) => <button key={item.title} type="button" aria-controls="path-detail" aria-pressed={active===i} onClick={() => setActive(i)}><span>{item.index}</span>{item.title}</button>)}
          </div>
          <article className="detail" id="path-detail" aria-live="polite"><div className="detail-inner" key={path.tag}><p className="overline">{path.tag}</p><h3>{path.heading}</h3><p>{path.description}</p><ul>{path.points.map(point => <li key={point}>{point}</li>)}</ul></div></article>
        </div>
      </section>
      <section className="method" id="metodo">
        <div><MotionArt /></div><div className="method-copy"><p className="overline">O PRIMEIRO ENCONTRO</p><h2>O que seria conversado?</h2><p>O desenho deste serviço prioriza entendimento antes de qualquer próxima decisão.</p><ol><li><strong>O que mudou na sua rotina?</strong><span>Espaço para ouvir o que motivou a procura.</span></li><li><strong>O que você gostaria de recuperar?</strong><span>Objetivos descritos com as suas próprias palavras.</span></li><li><strong>Qual seria o próximo passo?</strong><span>Uma explicação clara do que a clínica propõe e por quê.</span></li></ol></div>
      </section>
      <section className="preview" aria-labelledby="preview-title">
        <figure><img src={photos+'/editorial.webp'} alt="Pés de atletas em movimento durante uma corrida" loading="lazy" width="1100" height="733"/><figcaption>Movimento em contexto · fotografia editorial</figcaption></figure>
        <div><p className="overline">UM PERCURSO EM TRÊS TEMPOS</p><h2 id="preview-title">Prévia do encontro.</h2>
          <div className="preview-controls" role="group" aria-label="Fase do encontro">{steps.map((item,i)=><button type="button" key={item.label} aria-controls="preview-result" aria-pressed={i===step} onClick={()=>setStep(i)}>{item.label}</button>)}</div>
          <p className="preview-result" id="preview-result" aria-live="polite"><strong>{steps[step].label}:</strong> {steps[step].text}</p>
        </div>
      </section>
      <section className="questions"><p className="overline">PERGUNTAS SOBRE O SITE</p><h2>Bom saber.</h2><details><summary>Posso usar a página para marcar atendimento?</summary><p>Não. Esta é uma demonstração de interface; o estúdio Eixo Movimento é fictício.</p></details><details><summary>A escolha de jornada é uma avaliação?</summary><p>Não. As opções só reorganizam o conteúdo da página e não correspondem a uma indicação clínica.</p></details></section>
      <section className="end" id="sobre"><p className="overline">PROJETO CONCEITUAL</p><h2>Design para um<br/>primeiro contato mais claro.</h2><p>Marca fictícia. Este site não oferece atendimento, diagnóstico ou orientação de saúde, e não coleta informações pessoais.</p></section>
    </main>
    <footer><span>EIXO MOVIMENTO</span><a href="#inicio">Voltar ao início</a></footer>
  </>;
}
