import useFetchData from './useFetchData'
 
function User() {
    const { data } = useFetchData("https://api.github.com/users");

  return (
      <div>
          {data && (
            data.map((user) =>(
                <div className="text-white" key={user.id}>
                    <h1> {user.login} </h1>
                    <p> { user.type } </p>
                    <img src={user.avatar_url} width="100px" height="100px"/>
                </div>
            ))
          )}
      </div>
  )
}

export default User;
