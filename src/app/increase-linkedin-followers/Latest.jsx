import React from "react";
import Image from "next/image";
import Link from "next/link";

const Latest = () => {
  return (
    <div className="flex flex-col divide-y dark:divide-gray-300">
      <div className="flex px-1 py-4">
        <Image
          quality={80}
          alt="crm software"
          className="flex-shrink-0 object-cover w-20 h-20 mr-4 dark:bg-gray-500"
          src="https://miro.medium.com/v2/resize:fit:828/format:webp/0*gxA9AbksB_mN6qEe"
          height={80}
          width={80}
        />
        <div className="flex flex-col flex-grow">
          <Link
            href="https://medium.com/@ultraflysolutions/how-to-make-use-of-crm-software-for-your-business-3821bc816038"
            className="font-serif hover:underline hover:text-blue-500 "
          >
            How to Make Use of CRM Software for Your Business?
          </Link>
          <p className="mt-auto text-xs dark:text-gray-600">
            Nov 15, 2024
            <Link
              href="https://medium.com/@ultraflysolutions/how-to-make-use-of-crm-software-for-your-business-3821bc816038"
              className="block dark:text-blue-600 lg:ml-2 lg:inline hover:underline hover:text-blue-500"
            >
              Crm Software
            </Link>
          </p>
        </div>
      </div>
      <div className="flex px-1 py-4">
        <Image
          width={80}
          height={80}
          alt="Software"
          className="flex-shrink-0 object-cover w-20 h-20 mr-4 dark:bg-gray-500"
          src="https://miro.medium.com/v2/resize:fit:828/format:webp/1*IyC9f2atqNGURqIu5G0SGQ.jpeg"
        />
        <div className="flex flex-col flex-grow">
          <Link
            href="https://medium.com/@ultraflysolutions/what-to-look-for-in-a-good-software-company-as-a-client-004fa16d0666"
            className="font-serif hover:underline hover:text-blue-500"
          >
            What to Look for In a Good Software Company as a Client?
          </Link>
          <p className="mt-auto text-xs dark:text-gray-600">
            Nov 8, 2024
            <Link
              href="https://medium.com/@ultraflysolutions/what-to-look-for-in-a-good-software-company-as-a-client-004fa16d0666"
              className="block dark:text-blue-600 lg:ml-2 lg:inline hover:underline hover:text-blue-500"
            >
              Software Development
            </Link>
          </p>
        </div>
      </div>
      <div className="flex px-1 py-4">
        <Image
          quality={80}
          alt="meta ads"
          className="flex-shrink-0 object-cover w-20 h-20 mr-4 dark:bg-gray-500"
          src="https://miro.medium.com/v2/resize:fit:828/format:webp/1*N6dEB44DRJK_rcpYw4mbhw.jpeg"
          width={80}
          height={80}
        />
        <div className="flex flex-col flex-grow">
          <Link
            href="https://medium.com/@ultraflysolutions/how-to-grow-your-business-using-meta-ads-in-2025-61d0642d3aff"
            className="font-serif hover:underline hover:text-blue-500"
          >
            How to Grow Your Business Using Meta Ads in 2025?
          </Link>
          <p className="mt-auto text-xs dark:text-gray-600">
            Nov 18, 2024
            <Link
              href="https://medium.com/@ultraflysolutions/how-to-grow-your-business-using-meta-ads-in-2025-61d0642d3aff"
              className="block dark:text-blue-600 lg:ml-2 lg:inline hover:underline hover:text-blue-500"
            >
              Meta Ads
            </Link>
          </p>
        </div>
      </div>
      <div className="flex px-1 py-4">
        <Image
          quality={80}
          alt="business"
          width={80}
          height={80}
          className="flex-shrink-0 object-cover w-20 h-20 mr-4 dark:bg-gray-500"
          src="https://miro.medium.com/v2/resize:fit:828/format:webp/0*Dcy5apMEzXyP3fFr"
        />
        <div className="flex flex-col flex-grow">
          <Link
            href="https://medium.com/@ultraflysolutions/what-to-look-for-in-a-good-software-company-as-a-client-004fa16d0666"
            className="font-serif hover:underline hover:text-blue-500"
          >
            How to Grow Your Business Online in 2025?
          </Link>
          <p className="mt-auto text-xs dark:text-gray-600">
            Oct 26, 2024
            <Link
              href="https://medium.com/@ultraflysolutions/what-to-look-for-in-a-good-software-company-as-a-client-004fa16d0666"
              className="block dark:text-blue-600 lg:ml-2 lg:inline hover:underline hover:text-blue-500"
            >
              Business Strategy
            </Link>
          </p>
        </div>
      </div>
      <div className="flex px-1 py-4">
        <Image
          quality={80}
          alt="business"
          className="flex-shrink-0 object-cover w-20 h-20 mr-4 dark:bg-gray-500"
          src="https://miro.medium.com/v2/resize:fit:828/format:webp/0*f5LzbBbrw1C3pP1U"
          width={80}
          height={80}
        />
        <div className="flex flex-col flex-grow">
          <Link
            href="https://medium.com/@ultraflysolutions/how-to-grow-your-ecommerce-business-in-2025-55df0149bacd"
            className="font-serif hover:underline hover:text-blue-500 "
          >
            How to Grow Your ECommerce Business in 2025?
          </Link>
          <p className="mt-auto text-xs dark:text-gray-600">
            Nov 21, 2024
            <Link
              href="https://medium.com/@ultraflysolutions/how-to-grow-your-ecommerce-business-in-2025-55df0149bacd"
              className="block dark:text-blue-600 lg:ml-2 lg:inline hover:underline hover:text-blue-500"
            >
              Ecommerce
            </Link>
          </p>
        </div>
      </div>
    </div>
  );
};

export default Latest;
