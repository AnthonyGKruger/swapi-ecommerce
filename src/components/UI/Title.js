const Title = ({content}) => {
  return (
    <>
      <section className="py-6">
        <div className="container px-6 m-auto">
          <div className="grid grid-cols-4 gap-6 md:grid-cols-8 lg:grid-cols-12">
            <div className="col-span-4 md:col-span-8 lg:col-span-12 border-b-2 border-yellow-400">
              <span className="text-yellow-400 text-xl">{content}</span>
            </div>
          </div>
        </div>
      </section>
    </>
  )
}

export default Title