function DashNav(){
    return(
        <div className="mx-1 bg-primary my-2 rounded min-h-100 p-2 text-white d-flex flex-row align-items-center justify-content-between px-3">
            <h2 className="m-0 px-3" onClick={update}>Welcome, {userState.name} </h2>
            <div className="p-1  d-flex flex-row align-items-center me-3 ">
                <div name="profilePic " style={{ minHeight: "50px", minWidth: "50px" }} className=" rounded-circle bg-dark">
                    <img src="/images/logo192.png" alt="img"  style={{ maxHeight: "50px", maxWidth: "50px" }} className='bg-contain' />
                </div>
                <div name="info" className="ms-1">
                    <div name="name" className=' m-0  p-0 fw-bold' style={{ fontSize: "17px" }}>{userState.name}</div>
                    <div name="email" className=' m-0 p-0 rounded bg-secondary px-1 mt-1' style={{ fontSize: "10px" }}>{userState.email}</div>
                </div>
                <div name="dropdown-icon" className='p-2 ms-1 h-full w-full'>
                    <i className="fa-brands fa-github fa-2x ms-3 text-dark"></i>
                </div>
            </div>
        </div>
    )
}

export default DashNav;