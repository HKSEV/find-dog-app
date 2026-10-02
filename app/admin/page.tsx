"use client";

import React ,{ useState, useEffect } from "react";
import { useRouter } from "next/navigation";
import axios from "axios";
import { Layout } from "../components/layout/Layout";
import * as A from "./DashBoard.styled";

export default function DashBoard() {
  const [isAdmin, setIsAdmin] = useState(false);
  const router = useRouter();

  // useEffect(() => {
  //   const checkSession = async () => {
  //     try {
  //       const response = await axios.get("/api/admin/check", {
  //         withCredentials: true
  //       });
  //       setIsAdmin(true);
  //       console.log("로그인 유지 중: ", response.data.name);
  //     }
  //     catch (err) {
  //       setIsAdmin(false);
  //       router.push("/admin/login");
  //     };
  //   };
  //   checkSession();
  // }, []);

  return (
    <Layout>
      <A.PageHeader>
        <h1>Dashboard</h1>
        <a href="#"
        className="d-none d-sm-inline-block 
        btn btn-sm btn-primary shadow-sm">
          <i className="fas fa-download fa-sm text-white-50"/>
          Generate Report
        </a>
      </A.PageHeader>

      <A.GridRow>
        <A.CardColumn>
          <A.StatCard $borderColor="#4E73DF">
            <A.CardBody>
              <div className="">
                <div
                className="text-xs font-weight-bold
                text-primary text-uppercase mb-1">
                  Earnings(Monthly)
                </div>

                <div
                className="h5 mb-0 font-weight-bold text-gray-800">
                  $40,000
                </div>

                <div className="col-auto">
                  <i className="fas fa-calendar fa-2x text-gray-300"/>
                </div>
              </div>
            </A.CardBody>
          </A.StatCard>
        </A.CardColumn>

        <A.CardColumn>
          <A.StatCard $borderColor="#1CC88A">
            <A.CardBody>
              <div className="">
                <div
                className="text-xs font-weight-bold
                text-success text-uppercase mb-1">
                  Earnings(Annual)
                </div>

                <div
                className="h5 mb-0 font-weight-bold text-gray-800">
                  $215,000
                </div>
              </div>
            </A.CardBody>
          </A.StatCard>
        </A.CardColumn>
      </A.GridRow>
    </Layout>
  );
};