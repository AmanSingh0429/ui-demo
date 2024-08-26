import MedCard from "./MedCard"

const Feed = () => {
  return (
    <div className="flex h-fit w-full gap-6 flex-wrap max-md:justify-center">
      <MedCard />
      <MedCard />
      <MedCard />
      <MedCard avalibality={false} />
      <MedCard avalibality={false} />
      <MedCard avalibality={false} />
      <MedCard />
      <MedCard />
      <MedCard />
    </div>
  )
}

export default Feed