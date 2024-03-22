// import React from 'react'


// const UserProfile: React.FC = () => {
//   const showProfile = () => {
//       alert("Profile icon clicked!");
//   };

//   const showNotifications = () => {
//       alert("Notifications icon clicked!");
//   };

//   const showSecurity = () => {
//       alert("Security icon clicked!");
//   };

//   const showAppearance = () => {
//       alert("Appearance icon clicked!");
//   };

//   const showHelp = () => {
//       alert("Help icon clicked!");
//   };

//   const cancelChanges = () => {
//       alert("Changes canceled!");
//   };

//   const saveChanges = () => {
//       alert("Changes saved!");
//   };

//   return (
//     <div className="container mt-5">
//     <div className="profile-container">
//         <div className="header">
//             <h2>Profile</h2>
//         </div>

//         <div className="icons-container">
//             <div className="profile">
//                 <i className="fas fa-user"></i> Profile <span className="sr-only">(Profile)</span>
//             </div>
//             <div className="notifications">
//                 <i className="fas fa-bell"></i> Notifications <span className="sr-only">(Notifications)</span>
//             </div>
//             <div className="security">
//                 <i className="fas fa-lock"></i> Security <span className="sr-only">(Security)</span>
//             </div>
//             <div className="appearance">
//                 <i className="fas fa-cog"></i> Appearance <span className="sr-only">(Appearance)</span>
//             </div>
//             <div className="help">
//                 <i className="fas fa-info-circle"></i> Help <span className="sr-only">(Help)</span>
//             </div>
//         </div>

//         <div className="user-info">
//             <div className="row">
//                 <div className="col">
//                     <input type="text" className="form-control" placeholder="First Name" />
//                 </div>
//                 <div className="col">
//                     <input type="text" className="form-control" placeholder="Last Name" />
//                 </div>
//             </div>

//             <div className="row mt-3">
//                 <div className="col">
//                     <input type="email" className="form-control" placeholder="Email" />
//                 </div>
//             </div>

//             <div className="row mt-3">
//                 <div className="col">
//                     <input type="text" className="form-control" placeholder="Address" />
//                 </div>
//             </div>

//             <div className="row mt-3">
//                 <div className="col">
//                     <input type="text" className="form-control" placeholder="Contact Number" />
//                 </div>
//                 <div className="col">
//                     <input type="text" className="form-control" placeholder="City" />
//                 </div>
//                 <div className="col">
//                     <input type="text" className="form-control" placeholder="State" />
//                 </div>
//             </div>

//             <div className="row mt-3">
//                 <div className="col">
//                     <input type="password" className="form-control" placeholder="Password" />
//                 </div>
//             </div>

//             <div className="buttons-container mt-4">
//                 <button className="btn btn-secondary" onClick={() => console.log('Cancelled')}>Cancel</button>
//                 <button className="btn btn-primary" onClick={() => console.log('Saved')}>Save</button>
//             </div>
//         </div>
//     </div>
// </div>
//   )
// }

// export default UserProfile


import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';

const UserProfile: React.FC = () => {
    const showProfile = () => {
        alert("Profile icon clicked!");
    };

    const showNotifications = () => {
        alert("Notifications icon clicked!");
    };

    const showSecurity = () => {
        alert("Security icon clicked!");
    };

    const showAppearance = () => {
        alert("Appearance icon clicked!");
    };

    const showHelp = () => {
        alert("Help icon clicked!");
    };

    const cancelChanges = () => {
        alert("Changes canceled!");
    };

    const saveChanges = () => {
        alert("Changes saved!");
    };

    return (
        <div className="container-fluid">
            <div className="row">
                <div className="col-lg-3">
                    <div className="dropdown">
                        <button className="btn btn-secondary dropdown-toggle" type="button" id="dropdownMenuButton" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                            Menu
                        </button>
                        <div className="dropdown-menu" aria-labelledby="dropdownMenuButton">
                            <a className="dropdown-item" href="#" onClick={showProfile}>Profile</a>
                            <a className="dropdown-item" href="#" onClick={showNotifications}>Notifications</a>
                            <a className="dropdown-item" href="#" onClick={showSecurity}>Security</a>
                            <a className="dropdown-item" href="#" onClick={showAppearance}>Appearance</a>
                            <a className="dropdown-item" href="#" onClick={showHelp}>Help</a>
                        </div>
                    </div>
                </div>
                <div className="col-lg-9">
                    <div className="container mt-5">
                        <div className="profile-container">
                            <div className="header">
                                <h2>Profile</h2>
                            </div>
                            <div className="user-info">
                                <div className="row">
                                    <div className="col">
                                        <input type="text" className="form-control" placeholder="First Name" />
                                    </div>
                                    <div className="col">
                                        <input type="text" className="form-control" placeholder="Last Name" />
                                    </div>
                                </div>
                                <div className="row mt-3">
                                    <div className="col">
                                        <input type="email" className="form-control" placeholder="Email" />
                                    </div>
                                </div>
                                <div className="row mt-3">
                                    <div className="col">
                                        <input type="text" className="form-control" placeholder="Address" />
                                    </div>
                                </div>
                                <div className="row mt-3">
                                    <div className="col">
                                        <input type="text" className="form-control" placeholder="Contact Number" />
                                    </div>
                                    <div className="col">
                                        <input type="text" className="form-control" placeholder="City" />
                                    </div>
                                    <div className="col">
                                        <input type="text" className="form-control" placeholder="State" />
                                    </div>
                                </div>
                                <div className="row mt-3">
                                    <div className="col">
                                        <input type="password" className="form-control" placeholder="Password" />
                                    </div>
                                </div>
                                <div className="buttons-container mt-4">
                                    <button className="btn btn-secondary" onClick={cancelChanges}>Cancel</button>
                                    <button className="btn btn-primary" onClick={saveChanges}>Save</button>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default UserProfile;
