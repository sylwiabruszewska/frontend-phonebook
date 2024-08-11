import { Helmet } from "react-helmet";
import { useEffect } from "react";
import { useNavigate, useParams } from "react-router-dom";

import { axiosInstance } from "@utils/axiosConfig";

const RedirectPage = () => {
  const navigate = useNavigate();
  const { verificationToken } = useParams();

  const verifyUrl = `/users/verify/${verificationToken}`;

  useEffect(() => {
    const verifyUser = async () => {
      try {
        await axiosInstance.get(verifyUrl);
        navigate("/login");
      } catch (error) {
        console.error(error);
        navigate("/register");
      }
    };

    verifyUser();
  }, [navigate, verifyUrl]);

  return (
    <>
      <Helmet>
        <title>Verification</title>
      </Helmet>
    </>
  );
};

export default RedirectPage;
