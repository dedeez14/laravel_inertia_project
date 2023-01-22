//import React
import React from 'react';

import LayoutLaman from '../../Layouts/LamanDefault';

//import inertia adapter
// import { Inertia } from '@inertiajs/inertia';

// //import Link
// import { Link } from '@inertiajs/inertia-react';

export default function LamanAbout(title) {
    // console.log(title)

  return (
    <LayoutLaman>
        <div className="container">
            <div className="row pt-2">
                <div className="col-md-9 mt-2">
                    <div className="row text-center bg-primary me-4">
                        <h4>{title.header}</h4>
                    </div>
                    <div className="row text-center bg-primary me-4 mt-1 pb-3 pt-2">
                        {/* Bisa di ForEach untuk isi konten */}
                        <div className="col-md-4">
                            <div className="card mt-2">
                                <div className="card-header"></div>
                                <div className="card-body">
                                  <div className="card-title">Rhoma</div>
                                  <div className="card-text">Lorem ipsum dolor sit amet, consectetur adipisicing elit.</div>
                                  <a href="" className='btn btn-primary'>selengkapnya</a>
                                </div>
                                <div className="card-footer text-muted">
                                  <p>2 days ago</p>
                                </div>
                            </div>
                        </div>
                        {/* End ForEach Konten */}
                    </div>
                </div>
                <div className="col-md-3 mt-2">
                    <div className="row text-center bg-primary"><h4>Sidebar</h4></div>
                    <div className="row ms-2"><li>Sibar</li></div>
                </div>
            </div>
        </div>
    </LayoutLaman>
  )
}
