import React from "react";

const Home = () => {
  return (
    <main className="py-20 container mx-auto">
      <section className="text-center container mx-auto">
        <img className="mx-auto w-64" src="/BeagleOutline.png" alt="Beagle" />
        <h1 className="mx-auto mt-10 text-5xl">Álvaro Durán Studio</h1>
        <p className="mt-5">
          The primary source for my writing.
          <br />
          For inquiries please contact{" "}
          <a href="mailto:alvaro.duran.barata@gmail.com">
            alvaro.duran.barata@gmail.com
          </a>
          .
        </p>
      </section>
      <nav
        className="
        mt-5 mx-auto grid grid-cols-3 gap-4 py-4
        border-t border-b border-nord-8
        divide-x-2 divide-double divide-nord-8
        font-family-clearface-bold text-center text-xl uppercase
        "
      >
        <a>The Writer</a>
        <a>Essays</a>
        <a>Projects</a>
      </nav>
      <section
        className="
        mt-5 mx-auto
        pb-16
        border-b border-nord-8
      "
      >
        <h2 className="text-3xl">Now</h2>
        <h6 className="text-xs">
          (This is <a href="https://nownownow.com/about">a now page</a>, and if
          you have your own site,{" "}
          <a href="https://nownownow.com/about">you should make one</a>, too.)
        </h6>
        <br className="my-2" />
        <div className="w-11/12 mx-auto text-lg">
          <p>
            Omnis est quam earum ut. Fuga porro esse nihil. Natus rerum corporis
            sed est omnis. Sed laboriosam quis placeat in id assumenda.
            Reiciendis praesentium omnis voluptatem ut natus aperiam. Officia
            non dolorum et voluptatem itaque nostrum eligendi praesentium. Sint
            ea eveniet accusamus. Ipsum et minus id molestiae et eos suscipit
            quas. Quos repellat sequi qui quia provident. Et excepturi
            reprehenderit nulla delectus autem. Et sint perspiciatis
            exercitationem labore voluptas distinctio. Qui doloremque distinctio
            porro. Cumque sapiente omnis beatae cum voluptatibus. Consequatur
            commodi tempore beatae asperiores amet. Et animi consectetur sint
            omnis ut. Mollitia error dolores doloremque blanditiis blanditiis
            molestiae in id. Eligendi veniam repudiandae repudiandae explicabo
            ducimus soluta et voluptate. Eos sit quia totam veritatis qui
            tempore. Qui voluptatem asperiores quis dolore vitae perferendis.
            Facilis maxime placeat molestiae quibusdam tempore repudiandae iusto
            repellendus. Esse itaque sit odio corporis in.
          </p>
        </div>
      </section>
    </main>
  );
};

export default Home;
