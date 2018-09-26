import React, { Component } from 'react';
import { inject, observer } from 'mobx-react';
import NavBar from './navbar'
import Footer from './footer'
import { row, col, table } from 'bootstrap';
import DayPickerInput from 'react-day-picker/DayPickerInput'
import TodoList from "./TodoList";
import '../styles/main.css';
import '../styles/largescreen.css';
import 'react-day-picker/lib/style.css';


const AddProject = inject(stores => ({
  currentProject: stores.projects.currentProject
}))(observer(
  class AddProject extends Component {

  buttonClick = () => {
    console.log('button clicked')
  }

  render(){
    const { currentProject } = this.props;
    console.log('currentProject', currentProject);
    return(
      <div className="">
          <NavBar />

          <div className="row">{/* Banner */}
                <div className="col-md-12">
                    <div id="home_image" className="bg-image" >
                      <div className="page-center title-text" >
                        <h1 className="homePageTitle">ADD PROJECT</h1>
                      </div>
                    </div>
                </div>
          </div>{/* End of Banner */}

          {/* Forms */}

          <div className="page-center">

                <div className="add-projec-title1">
                  <h1>Project Details</h1>
                </div>

                <div className="add-project">

                <div class="row">{/* Project name */}
                  <div className="col-4">
                    <p>Project Name :</p>
                  </div>

                  <div className="col-8">
                    <form>
                      <input type="text" name="name" />
                    </form>
                  </div>
                </div>{/* End of project name */}

                <div class="row">{/* End of Project category */}
                  <div className="col-4">
                    <p>Project Category :</p>
                  </div>

                  <div className="col-8">
                  <form>
                    <div>
                      <select className="dropdown-color">
                        <option value="">Select project category</option>
                        <option value="">Construction</option>
                        <option value="">Welfare</option>
                        <option value="">Agriculture</option>
                      </select>
                    </div>
                  </form>
                  </div>

                </div>{/* End of project category */}

                <div class="row">{/* Project Description */}
                  <div className="col-4">
                    <p>Project Description :</p>
                  </div>

                  <div className="col-8">
                    <form>
                      <textarea />
                    </form>
                  </div>
                </div>{/* End of Project Description */}

                <div class="row">{/* Project Budget */}
                  <div className="col-4">
                    <p>Project Budget :</p>
                  </div>

                  <div className="col-8">
                    <form>
                      <input type="text" name="name" />
                    </form>
                  </div>
                </div>{/* End of Project Budget */}

                <div class="row"> {/* Start Date*/}
                  <div className="col-4">
                    <p>Start Date :</p>
                  </div>

                  <div className="col-8">
                    <form>
                      <DayPickerInput />
                    </form>
                  </div>
                </div>{/* End of Start Date*/}

                <div class="row">{/* Estimated End Date */}
                  <div className="col-4">
                    <p>Estimated End Date :</p>
                  </div>

                  <div className="col-8">
                    <form>
                      <DayPickerInput />
                    </form>
                  </div>
                </div>{/* End of Estimated End Date*/}

                <hr/>
                {/* Contractor Details */}
                <div className="add-projec-title">
                  <h1>Contractor Details </h1>
                </div>

                <div class="row">
                  <div className="col-4">
                    <p>Name :</p>
                  </div>

                  <div className="col-8">
                    <form>
                      <input type="text" name="name" />
                    </form>
                  </div>
                </div>

                <div class="row">
                  <div className="col-4">
                    <p>Company :</p>
                  </div>

                  <div className="col-8">
                    <form>
                      <input type="text" name="name" />
                    </form>
                  </div>
                </div>
                {/* End of Contractor Details */}

                <hr/>
                {/* Milestones*/}

                  <div class="row">
                    <div className="col-4">
                      <div className="add-projec-title">
                        <h1>Milestones </h1>
                      </div>
                    </div>

                    <div className="col-8 milestones">
                    <TodoList />
                  </div>

                </div>
                {/* End of Milestones*/}
                <hr/>
                <div>{/* Expenditure*/}
                  <div className="add-projec-title">
                    <h1>Expenditure </h1>
                  </div>

                  <div class="row">
                    <div className="col-4">
                      <p>Reason :</p>
                    </div>

                    <div className="col-8">
                      <form>
                        <input type="text" name="name" />
                      </form>
                    </div>
                  </div>

                  <div class="row">
                    <div className="col-4">
                      <p>Amount :</p>
                    </div>

                    <div className="col-8">
                      <form>
                        <input type="text" name="name" />
                      </form>
                    </div>
                  </div>

                  <div class="row">
                    <div className="col-4">
                      <p>Evidence (Eg: Receipt) :</p>
                    </div>

                    <div className="col-8">
                      <form>
                        <input type="file" />
                      </form>
                    </div>
                  </div>

                </div>{/* End of Expenditure*/}

                <div>{/* project completed*/}

                <hr/>
                <div className="add-projec-title">
                  <h1>Project completion  </h1>
                </div>

                <div class="row">
                  <div className="col-4">
                    <p>Is this project completed? :</p>
                  </div>

                  <div className="col-8 checkbox">
                    <form>
                    <input name="" type="checkbox" />
                    </form>
                  </div>
                </div>
                </div>{/* End of project completed*/}

                </div>

                <div className="project-button" >
                    <button class="button" onClick={this.buttonClick}>CLEAR</button>
                    <button class="button">ADD</button>
                </div>
              </div>

              <div>
                <Footer />
              </div>
    </div>
    )}

  }
))

export default AddProject;