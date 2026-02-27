import { useState } from "react";
import Animacao from "../../components/Animacao";
import CardProjetos from "../../components/CardProjetos";
import Modal from "../../components/Modal";

const projetos = [
  {
    titulo: "Landing page Lisa",
    descricao:
      "Site para um laboratório de inovação da Universidade UFERSA, com design clean e foco em conversão.",
    imagem: "/Lisa.png",
    tags: ["React", "Tailwind"],
    demo: "https://lisa.ufersa.dev.br",
    codigo: "Privado",
  },
  {
    titulo: "Sistema de Estoque",
    descricao:
      "Dashboard de controle de estoque para pequenas empresas.",
    imagem: "/sistemadeestoque.png",
    tags: ["React", "Tailwind"],
    demo: "https://sistemadeestoque.vercel.app",
    codigo: "Privado",
  },
  {
    titulo: "Landing page SportPro",
    descricao:
      "Site para uma empresa de materiais esportivos, com design moderno e foco em conversão.",
    imagem: "/SportPro.png",
    tags: ["React", "Tailwind"],
    demo: "https://sportpro.vercel.app",
    codigo: "Privado",
  },
  {
    titulo: "Site de Previsão do Tempo",
    descricao:
      "Consulta do clima atual informando o CEP.",
    imagem: "/tempo.png",
    tags: ["Html", "Css", "Js"],
    demo: "https://arthurpedr.github.io/Previs-o-do-Tempo/",
    codigo: "https://github.com/arthurpedr/Previs-o-do-Tempo",
  },
];

export default function Projetos() {
  const [modalOpen, setModalOpen] = useState(false);

  return (
    <section id="projetos" className="bg-black/95 text-white py-24 px-6">
      <Animacao>
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-14">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              Projetos em Destaque
            </h2>
            <p className="text-gray-400">
              Uma seleção de trabalhos recentes focados em UX e performance.
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-5">
            {projetos.map((projeto, index) => (
              <CardProjetos
                key={index}
                {...projeto}
                onPrivateCode={() => setModalOpen(true)}
              />
            ))}
          </div>
        </div>

        <Modal
          open={modalOpen}
          onClose={() => setModalOpen(false)}
        />
      </Animacao>
    </section>
  );
}