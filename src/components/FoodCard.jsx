

export const FoodCard = ( {src, name, price}  ) => {
  return (
    <div className="flex flex-col border rounded-lg p-10 hover:bg-yellow-100 shadow-md">
      <img src={src} className="w-auto h-44" />
      <h1 className="text-xl py-4">{name}</h1>
      <p>{price}</p>
    </div>
  )
}