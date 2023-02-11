const handdleSumit = (e : React.FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    const form = new FormData(e.currentTarget)
    const fields = Object.fromEntries(form.entries())

    console.log(fields);
    
  }

export function Search() {
    return (

        <div>
        <h1 className='tittleSeearch'>Search You favorite movie </h1>
        <header >
        <form 
        className='headerSearched'
        placeholder='Avengers,spederman ...'
        onSubmit={handdleSumit}>
          <input 
          name='search'
          placeholder='Avengers, start wards,The matrix ...' 
          type={'text'}
          />
          <button> Search </button>
        </form>
        </header>

        </div>
    )
}