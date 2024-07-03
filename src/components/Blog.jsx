const content = [
  {
    title: "Node JS - Native Module",
    desc: "Neque porro quisquam est qui dolorem ipsum quia dolor sit amet, consectetur, adipisci velit...",
    img: "https://media.istockphoto.com/id/473426392/photo/a-close-up-of-html-coding-in-bright-colors.webp?b=1&s=170667a&w=0&k=20&c=11NcPoBkjRftyLDrvnzVk4YxOk6E5hK61BmqpBMGf_M=",
    link: "/artikel1",
  },
  {
    title: "QR CODE GENERATOR",
    desc: "Neque porro quisquam est qui dolorem ipsum quia dolor sit amet, consectetur, adipisci velit...",
    img: "https://media.istockphoto.com/id/473426392/photo/a-close-up-of-html-coding-in-bright-colors.webp?b=1&s=170667a&w=0&k=20&c=11NcPoBkjRftyLDrvnzVk4YxOk6E5hK61BmqpBMGf_M=",
    link: "/artikel2",
  },
  {
    title: "Node JS - Native Module",
    desc: "Neque porro quisquam est qui dolorem ipsum quia dolor sit amet, consectetur, adipisci velit...",
    img: "https://media.istockphoto.com/id/473426392/photo/a-close-up-of-html-coding-in-bright-colors.webp?b=1&s=170667a&w=0&k=20&c=11NcPoBkjRftyLDrvnzVk4YxOk6E5hK61BmqpBMGf_M=",
    link: "/artikel1",
  },
];

function Artikel({ title, desc, img, link }) {
  return (
    <div className="card glass w-96 ">
      <figure>
        <img src={img} alt="car!" className=" bg-cover" />
      </figure>
      <div className="card-body items-center">
        <h2 className="card-title">{title}</h2>
        <p>{desc}</p>
        <div className="card-actions justify-end pt-4">
          <a href={link}>
            <button className="btn btn-primary">Read More</button>
          </a>
        </div>
      </div>
    </div>
  );
}

export default function Blog() {
  return (
    <section id="blog">
      <div className=" pt-32">
        <h1 className="text-4xl text-white">Our Blog's</h1>
      </div>
      <div className="hero bg-transparent min-h-screen">
        <div className="hero-content grid grid-cols-3 items-center">
          {content.map((props, key) => (
            <Artikel key={key} {...props} />
          ))}
        </div>
      </div>
    </section>
  );
}
