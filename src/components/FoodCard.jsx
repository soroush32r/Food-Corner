

export const FoodCard = ( {src, name, price}  ) => {
  return (
    <div className="flex flex-col items-center border rounded-lg p-5 hover:bg-yellow-100 shadow-md">
      <img src={src} className="w-56 h-56" />
      <h1 className="text-xl py-4">{name}</h1>
      <p>{price}</p>
    </div>
  )
}