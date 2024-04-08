const TopHeader = () => {
  return (
    <div className="bg-[rgba(224,31,31,0.86)] text-white py-2 font-bold">
      <div className="px-24 container mx-auto px-4 flex justify-between items-center">
        <div className="space-x-4">
          <span>Teléfono de contacto: 925110992</span>
          <a href="mailto:proyectos@solinoxperu.com">
            <span>proyectos@solinoxperu.com</span>
          </a>
        </div>
        <div id="et-secondary-menu"></div>
      </div>
    </div>
  );
};

export default TopHeader;