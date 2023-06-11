import ApiCall from "./ApiCall"

const UserDetailsTable = ({ sort }) => {
  return (
    <div className='user-details-table'>
        <table className="table">
          <thead>
              <tr>
                  <td>Image</td>
                  <td>Name</td>
                  <td>Email</td>
                  <td>Gender</td>
              </tr>
          </thead>
          
          <ApiCall showData={sort} />
                
        </table>
    </div>
  )
}

export default UserDetailsTable