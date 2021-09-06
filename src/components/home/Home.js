import React, { Component } from "react";
import classnames from "classnames";

class Home extends Component {
  render() {
    const { className } = this.props;

    return (
      <section
        className={classnames(
          "newsletter-form is-revealing md:flex",
          className
        )}
      >
        <div className="flex-grow flex-shrink mr-2">
          <p className="w-full px-4 py-3 text-sm text-primary-500 md:text-white lg:text-white xl:text-white bg-white md:bg-primary-500 lg:bg-primary-500 xl:bg-primary-500 border border-primary-500 md:border-primary-900 lg:border-primary-900 xl:border-primary-900  rounded-sm shadow-none">
            comercializacion@mdobleimpacto.com
          </p>
        </div>

        <div className="control mt-4 md:mt-0 lg:mt-0 xl:mt-0">
          <a href="mailto:comercializacion@mdobleimpacto.com">
            <button
              className="-mt-px text-white shadow-lg bg-secondary-400 btt-primary"
              type="button"
            >
              Escríbenos
            </button>
          </a>
        </div>
      </section>
    );
  }
}

export default Home;
