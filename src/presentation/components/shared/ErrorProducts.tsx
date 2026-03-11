
const ErrorProducts = () => {
  return (
    <section className="flex flex-col items-center justify-center min-h-100 w-full p-10 text-center">
                  <div className="bg-red-50 p-6 rounded-2xl border border-red-100">
                        <h3 className="text-red-800 font-bold text-lg">¡Vaya! Algo salió mal</h3>
                        <p className="text-red-600 mt-2 mb-6">{}</p>

                       
                  </div>
            </section>
  )
}

export default ErrorProducts