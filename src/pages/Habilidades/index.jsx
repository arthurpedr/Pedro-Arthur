import Carousel from "../../components/Carousel.jsx";
function Servicos() {

  const carouselItems = [
    "./html.svg",
    "./css.svg",
    "./js.svg",
    "./react.svg",
    "./tailwind.svg",
    "./c.svg",
    "./figma.svg",
    "./html.svg",
    "./css.svg",
    "./js.svg",
    "./react.svg",
    "./tailwind.svg",
    "./c.svg",
    "./figma.svg",
  ];

  return (
    <section
      id="Serviços"
      className="bg-black flex w-full md:min-h-screen mx-auto justify-center items-center text-white"
    >
      <div className="flex flex-col items-center justify-center w-full overflow-hidden">
        <h2 className="text-3xl md:text-4xl font-bold my-10 ">
          Habilidades
        </h2>
        <div>
          
          {/* Carrossel para Direita */}
          <section className="mb-10">
            <Carousel
              direction="right"
              items={carouselItems}
              className="mb-8"
            />
          </section>

          {/* Carrossel para Esquerda */}
          <section className="mb-10">
            <Carousel direction="left"
             items={carouselItems} />
          </section>
        </div>
      </div>
    </section>
  );
}
export default Servicos;
