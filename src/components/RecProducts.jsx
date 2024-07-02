import Assortment from "./Assortment"

const RecProducts = () => {
  const products = [
    {
      id: 1,
      title: "Sherry Leather Power Recliner",
      imgUrl:
        "https://www.wayfairnext.com/decorify/_next/image?url=https%3A%2F%2Fsecure.img1-fg.wfcdn.com%2Fim%2F54014212%2Fresize-h300-w300%255Ecompr-r85%2F2247%2F224729460%2Fdefault_image.jpg&w=384&q=75",
    },
    {
      id: 2,
      title: "Arshanti Armchair",
      imgUrl:
        "https://www.wayfairnext.com/decorify/_next/image?url=https%3A%2F%2Fsecure.img1-fg.wfcdn.com%2Fim%2F05653766%2Fresize-h300-w300%255Ecompr-r85%2F2044%2F204435549%2Fdefault_image.jpg&w=384&q=75",
    },
    {
      id: 3,
      title: "Libra Upholstered Chair",
      imgUrl:
        "https://www.wayfairnext.com/decorify/_next/image?url=https%3A%2F%2Fsecure.img1-fg.wfcdn.com%2Fim%2F32147374%2Fresize-h300-w300%255Ecompr-r85%2F1685%2F168542398%2Fdefault_image.jpg&w=384&q=75",
    },
    {
      id: 4,
      title: "Mona Upholstered Chair",
      imgUrl:
        "https://www.wayfairnext.com/decorify/_next/image?url=https%3A%2F%2Fsecure.img1-fg.wfcdn.com%2Fim%2F25444504%2Fresize-h300-w300%255Ecompr-r85%2F2497%2F249753127%2Fdefault_image.jpg&w=384&q=75",
    },
    {
      id: 5,
      title: "Mona Upholstered Chair",
      imgUrl:
        "https://www.wayfairnext.com/decorify/_next/image?url=https%3A%2F%2Fsecure.img1-fg.wfcdn.com%2Fim%2F25444504%2Fresize-h300-w300%255Ecompr-r85%2F2497%2F249753127%2Fdefault_image.jpg&w=384&q=75",
    },
  ]
  const products2 = [
    {
      id: 1,
      title: "Sherry Leather Power Recliner",
      imgUrl:
        "https://www.wayfairnext.com/decorify/_next/image?url=https%3A%2F%2Fsecure.img1-fg.wfcdn.com%2Fim%2F42518546%2Fresize-h300-w300%255Ecompr-r85%2F2541%2F254164462%2Fdefault_image.jpg&w=384&q=75",
    },
    {
      id: 2,
      title: "Arshanti Armchair",
      imgUrl:
        "https://www.wayfairnext.com/decorify/_next/image?url=https%3A%2F%2Fsecure.img1-fg.wfcdn.com%2Fim%2F20925873%2Fresize-h300-w300%255Ecompr-r85%2F1451%2F145125221%2Fdefault_image.jpg&w=384&q=75",
    },
    {
      id: 3,
      title: "Libra Upholstered Chair",
      imgUrl:
        "https://www.wayfairnext.com/decorify/_next/image?url=https%3A%2F%2Fsecure.img1-fg.wfcdn.com%2Fim%2F61702629%2Fresize-h300-w300%255Ecompr-r85%2F7235%2F72357247%2Fdefault_image.jpg&w=384&q=75",
    },
    {
      id: 4,
      title: "Mona Upholstered Chair",
      imgUrl:
        "https://www.wayfairnext.com/decorify/_next/image?url=https%3A%2F%2Fsecure.img1-fg.wfcdn.com%2Fim%2F02158420%2Fresize-h300-w300%255Ecompr-r85%2F1934%2F193411511%2Fdefault_image.jpg&w=384&q=75",
    },
    {
      id: 5,
      title: "Mona Upholstered Chair",
      imgUrl:
        "https://www.wayfairnext.com/decorify/_next/image?url=https%3A%2F%2Fsecure.img1-fg.wfcdn.com%2Fim%2F11351060%2Fresize-h300-w300%255Ecompr-r85%2F2402%2F240299613%2Fdefault_image.jpg&w=384&q=75",
    },
  ]
  console.log(products)

  return (
    <div className="flex flex-column content-center justify-center mt-5">
      <div className="">
        <p className="font-bold text-lg text-center">Products You May Like</p>
        <p className="text-sm text-slate-400 text-center">
          Here are a few products to get you started on your design journey.
        </p>
      </div>
      <div className="-space-y-4">
        <Assortment title="Accent Chairs" product={products} />
        <Assortment title="End Tables" product={products2} />
      </div>
    </div>
  )
}

export default RecProducts
