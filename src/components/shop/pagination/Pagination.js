const Pagination= ({totalPosts, postPerPage, paginate}) =>{
  const pageNumbers = []

  for(let i=1; i< Math.ceil( totalPosts / postPerPage); i++){
    pageNumbers.push(i)
  }
  
  return (
    <nav>
      <ul>
        {pageNumbers.map(number =>(
          <span key={number}>
            <button onClick={() => paginate(number)} >
              {number}
            </button>
          </span>
        ))}
      </ul>
    </nav>
  )
}
export default Pagination