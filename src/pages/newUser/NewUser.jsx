 import "./newUser.scss"

export const NewUser = () => {
  return (
    <div className="new-user">
        <h1 className="new-user-title">New User</h1>
        <form action="new-user-form">
            <div className="new-user-item">
                <label>Username</label>
                <input type="text" placeholder="Ali" />
            </div>
            <div className="new-user-title">
                <label>Full Name</label>
                <input type="text" placeholder="Ali Assaad" />
            </div>
            <div className="new-user-title">
                <label>Email</label>
                <input type="email" placeholder="aliassaad@gmail.com" />
            </div>
            <div className="new-user-title">
                <label>Password</label>
                <input type="password" placeholder="aliAssaad@94" />
            </div>
            <div className="new-user-title">
                <label>Phone</label>
                <input type="text" placeholder="+96170220405" />
            </div>
            <div className="new-user-title">
                <label>Gender</label>
                <div className="new-user-gender">
                    <label htmlFor="male">Male</label>
                    <input type="radio" name="male" id="male" value="male"/>
                    <label htmlFor="female">Female</label>
                    <input type="radio" name="female" id="female" value="female"/>
                    <label htmlFor="others">Others</label>
                    <input type="radio" name="others" id="others" value="others"/>
                </div>
            </div>
            <div className="new-user-item">
                <label htmlFor="active">Active</label>
                <select className="active-select" name="active" id="active">
                    <option value="yes">Yes</option>
                    <option value="no">No</option>
                </select>

            </div>

        </form>
    </div>
  )
}
