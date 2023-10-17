import React from "react";
import "./styles.css";

const EditProfile = () => {
  return (
    <div className="container set-width">
      <div class="container-xl px-4 mt-4">
        <div class="row">
          <div class="col-xl-4">
            <div class="card mb-4 mb-xl-0">
              <div class="card-header">Profile Picture</div>
              <div class="card-body text-center">
                <img
                  class="img-account-profile rounded-circle mb-2"
                  src="http://bootdey.com/img/Content/avatar/avatar1.png"
                  alt=""
                />

                <button class="btn btn-primary" type="button">
                  Upload new image
                </button>
              </div>
            </div>
          </div>
          <div class="col-xl-8">
            <div class="card mb-4">
              <div class="card-header">Account Details</div>
              <div class="card-body">
                <form>
                  <div class="mb-3">
                    <label class="small mb-1" for="inputFirstName">
                      User Name
                    </label>
                    <input
                      class="form-control"
                      id="inputUsername"
                      type="text"
                      placeholder="User Name"
                      value=""
                    />
                  </div>

                  <div class="row gx-3 mb-3">
                    <div class="col-md-6">
                      <label class="small mb-1" for="inputFirstName">
                        Email Address
                      </label>
                      <input
                        class="form-control"
                        id="inputFirstName"
                        type="email"
                        placeholder="Email Address"
                        value=""
                      />
                    </div>

                    <div class="col-md-6">
                      <label class="small mb-1" for="inputLastName">
                        Phone
                      </label>
                      <input
                        class="form-control"
                        id="inputLastName"
                        type="tel"
                        placeholder="Enter your last name"
                        value=""
                      />
                    </div>
                  </div>

                  <div class="row gx-3 mb-3">
                    <div class="col-md-6">
                      <label class="small mb-1" for="inputOrgName">
                        Mobile Number
                      </label>
                      <input
                        class="form-control"
                        id="inputOrgName"
                        type="tel"
                        placeholder="Mobile Number"
                        value=""
                      />
                    </div>

                    <div class="col-md-6">
                      <label class="small mb-1" for="inputLocation">
                        Address
                      </label>
                      <input
                        class="form-control"
                        id="inputLocation"
                        type="text"
                        placeholder="Enter Your Address"
                        value=""
                      />
                    </div>
                  </div>

                  <div class="card-header">Socials</div>

                  <div class="row gx-3 mb-3">
                    <div class="col-md-6">
                      <label class="small mb-1" for="inputPhone">
                        Website
                      </label>
                      <input
                        class="form-control"
                        id="inputPhone"
                        type="text"
                        placeholder="Website"
                        value=""
                      />
                    </div>

                    <div class="col-md-6">
                      <label class="small mb-1" for="inputPhone">
                        GitHub User Name
                      </label>
                      <input
                        class="form-control"
                        id="inputPhone1"
                        type="text"
                        placeholder="GitHub User Name"
                        value=""
                      />
                    </div>
                  </div>

                  <div class="row gx-3 mb-3">
                    <div class="col-md-6">
                      <label class="small mb-1" for="inputPhone">
                        Twitter Handle
                      </label>
                      <input
                        class="form-control"
                        id="inputPhone"
                        type="text"
                        placeholder="Twitter Handle"
                        value=""
                      />
                    </div>

                    <div class="col-md-6">
                      <label class="small mb-1" for="inputPhone">
                        Instagram Handle
                      </label>
                      <input
                        class="form-control"
                        id="inputPhone1"
                        type="text"
                        placeholder="Instagram Handle"
                        value=""
                      />
                    </div>
                  </div>

                  <button class="btn btn-primary align-button" type="button">
                    Save changes
                  </button>
                </form>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default EditProfile;
