import Link from "next/link"

export function Header() {
    return (
      <div className="px-6 py-3 lg:px-8 ">
        <div>
          <nav
            className="flex h-9 items-center justify-start"
            aria-label="Global"
          >
          
              <Link href="/" className="mr-1.5 p-1.5">
               Home
              </Link>
          
            
            <Link href="/about" className=" p-1.5">
                About
                </Link>
           
          </nav>
        </div>
      </div>
    );
  }