import { useCallback } from "react";
import { FaFeather } from "react-icons/fa";
import { useRouter } from "next/router";

import useLoginModal from "@/hooks/useLoginModal";
import useCurrentUser from "@/hooks/useCurrentUser";

const SidebarTweetButton = () => {
  const router = useRouter();
  const loginModal = useLoginModal();
  const { data: currentUser } = useCurrentUser();










  
  const onClick = useCallback(() => {
    if (!currentUser) {
      return loginModal.onOpen();
    }

    router.push('/');
  }, [loginModal, router, currentUser]);

  return (
    <div onClick={onClick}>
      <div className="
        mt-6
        lg:hidden 
        rounded-full 
        h-14
        w-3
        p-4
        flex
        items-center
        justify-center 
        bg-whitenp
        hover:bg-opacity-80 
        transition 
        cursor-pointer
      ">
        <FaFeather size={24} color="white" />
      </div>
      <div className="
        mt-6
        hidden 
        lg:block 
        px-8
        py-2
        rounded-full
        bg-white
        hover:bg-opacity-70
        cursor-pointer
      ">
        <p 
          className="
            hidden 
            lg:block 
            text-center
            font-semibold
            text-black
            text-[20px]
        ">
          New post 
        </p>
      </div>
    </div>
  );
};

export default SidebarTweetButton;
