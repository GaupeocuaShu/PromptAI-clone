import Feed from "@components/Feed";
const Home = () => {
  return (
    <section className="w-full flex-center flex-col">
      <h1 className="head_text text-center">
        Discover & Share
        <br className="max-md:hidden" />
        <span className="orange_gradient text-center">AI-Power Prompts</span>
      </h1>
      <p className="desc text-center">
        Lorem ipsum dolor sit amet consectetur adipisicing elit. At sint autem
        possimus repellendus ut. Ex expedita ut, esse eligendi asperiores
        corporis fugit quaerat, tenetur quibusdam facilis eaque suscipit qui
        totam.
      </p>
      <Feed />
    </section>
  );
};

export default Home;
