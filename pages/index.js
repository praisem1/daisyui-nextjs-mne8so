export default function Home() {
  return (
    <html>
      <body class="bg-secondary min-h-screen">
        {/* NavBar*/}
        <div class="navbar bg-base-100">
          <div class="navbar-start">
            <div class="dropdown">
              <label tabindex="0" class="btn btn-ghost btn-circle">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  class="h-5 w-5"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    stroke-width="2"
                    d="M4 6h16M4 12h16M4 18h7"
                  />
                </svg>
              </label>
              <ul
                tabindex="0"
                class="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52"
              >
                <li>
                  <a>Homepage</a>
                </li>
                <li>
                  <a>Portfolio</a>
                </li>
                <li>
                  <a>About</a>
                </li>
              </ul>
            </div>
          </div>
          <div class="navbar-center">
            <a class="btn btn-ghost normal-case text-xl">Sid Laundry Room</a>
          </div>
          <div class="navbar-end"></div>
        </div>

        {/* Grid*/}
        <div className="grid gap-4 grid-cols-1 md:grid-cols-2 lg:grid-cols-3">
          <div class="card md:w-30 bg-primary text-primary-content ml-3 mr-3 mt-4">
            <div class="card-body justify-center">
              <h2 class="text-center">Washer 1</h2>
              <p>If a dog chews shoes whose shoes does he choose?</p>
              <div class="card-actions justify-between">
                <div class="card-actions content-start">
                  <button class="btn">Reset</button>
                </div>
                <div class="card-actions content-end">
                  <button class="btn">+10 Mins</button>
                </div>
              </div>
            </div>
          </div>

          <div class="card md:w-30 bg-primary text-primary-content ml-3 mr-3 mt-4">
            <div class="card-body justify-center">
              <h2 class="text-center">Washer 1</h2>
              <p>If a dog chews shoes whose shoes does he choose?</p>
              <div class="card-actions justify-between">
                <div class="card-actions content-start">
                  <button class="btn">Reset</button>
                </div>
                <div class="card-actions content-end">
                  <button class="btn">+10 Mins</button>
                </div>
              </div>
            </div>
          </div>

          <div class="card md:w-30 bg-primary text-primary-content ml-3 mr-3 mt-4">
            <div class="card-body justify-center">
              <h2 class="text-center">Washer 1</h2>
              <p>If a dog chews shoes whose shoes does he choose?</p>
              <div class="card-actions justify-between">
                <div class="card-actions content-start">
                  <button class="btn">Reset</button>
                </div>
                <div class="card-actions content-end">
                  <button class="btn">+10 Mins</button>
                </div>
              </div>
            </div>
          </div>

          <div class="card md:w-30 bg-primary text-primary-content ml-3 mr-3 mt-4">
            <div class="card-body justify-center">
              <h2 class="text-center">Washer 1</h2>
              <p>If a dog chews shoes whose shoes does he choose?</p>
              <div class="card-actions justify-between">
                <div class="card-actions content-start">
                  <button class="btn">Reset</button>
                </div>
                <div class="card-actions content-end">
                  <button class="btn">+10 Mins</button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </body>
    </html>
  );
}
