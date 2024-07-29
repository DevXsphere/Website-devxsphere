import React, { useState } from "react";
import Sheet from "react-modal-sheet";

export default function Navbar() {
  const [isOpen, setOpen] = useState(false);
  return (
    <nav class="bg-gray-200 shadow shadow-gray-300 w-100 px-8 md:px-auto">
      <div class="h-16 mx-auto md:px-4 container flex items-center justify-between flex-wrap md:flex-nowrap">
        <div
          class="text-indigo-500 md:order-1 cursor-pointer"
          onClick={() => setOpen(true)}
        >
          <img src="https://s3-alpha-sig.figma.com/img/8756/425b/a39c07d98bfc2723c92b2dcb2b2463f1?Expires=1723420800&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=YhwuYrJt6X9ZftYOjvnYRpwEXZaJqG4H27ilSySOycWYzwpnETijD4rTy51xzX6Z6zOKWplx3P2cfS5cdAZVmcs5qBlZCn~l~908iTiUYArhWjLxx3tZ6w6Z8QBKM6cZXBPuzqB5zkvRX7orkcmSIGTAPfJg-X9xGANlBHH6xjDzjgz1dExvECLp~o2co0MQX83~4m1tsmCRybfmNYF~JjV6HMLzHD~iK-2EjLV4CPVT3iUpnpm~lvZCLq-dS3t4hpWAvOqYje-0wqhjUCqAGDJLyszqM55gaXRjfwTneBbZQ16JWacUYhvSEVCANIxBlHE0tst72cPfWm554az76g__" className="h-20"/>
        </div>
        <Sheet isOpen={isOpen}>
          <Sheet.Container>
            <Sheet.Header>
              <Sheet.Content>
                <div class="text-gray-500 order-3 w-full md:w-auto md:order-2 flex justify-around items-start py-8">
                  <ul class="flex flex-col font-semibold justify-between text-xl space-y-3">
                    <li class="md:px-4 md:py-2 text-indigo-500">
                      <a href="#">Dashboard</a>
                    </li>
                    <li class="md:px-4 md:py-2 hover:text-indigo-400">
                      <a href="#">Search</a>
                    </li>
                    <li class="md:px-4 md:py-2 hover:text-indigo-400">
                      <a href="#">Explore</a>
                    </li>
                    <li class="md:px-4 md:py-2 hover:text-indigo-400">
                      <a href="#">About</a>
                    </li>
                    <li class="md:px-4 md:py-2 hover:text-indigo-400">
                      <a href="#">Contact</a>
                    </li>
                  </ul>
                  <button className="text-lg" onClick={() => setOpen(false)}>
                    Close
                  </button>
                </div>
              </Sheet.Content>
            </Sheet.Header>
          </Sheet.Container>
        </Sheet>
        <div class="text-gray-500 order-3 w-full md:w-auto md:order-2 justify-around items-start py-8 hidden md:block">
          <ul class="flex font-semibold justify-between">
            <li class="md:px-4 md:py-2 text-indigo-500">
              <a href="#">Home</a>
            </li>
            <li class="md:px-4 md:py-2 hover:text-indigo-400">
              <a href="#">Events</a>
            </li>
            <li class="md:px-4 md:py-2 hover:text-indigo-400">
              <a href="#">Resources</a>
            </li>
            <li class="md:px-4 md:py-2 hover:text-indigo-400">
              <a href="#">Team</a>
            </li>
            <li class="md:px-4 md:py-2 hover:text-indigo-400">
              <a href="#">Join us</a>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
}
