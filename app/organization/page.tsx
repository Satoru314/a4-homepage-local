'use client';

import React from "react";
import SimpleHeading from "../components/simple_heading";
import DevDepartment from "../components/organization/dev_department";
import OrgDepartment from "../components/organization/org_department";
import MktDepartment from "../components/organization/mkt_department";

export default function Organization() {
    return (
        <div className="container mx-auto px-4 py-4 pt-18 mb-4">
            <SimpleHeading text="部署紹介" />

            <div className="mt-12 md:mt-16 space-y-20 md:space-y-24">
                <DevDepartment />
                <OrgDepartment />
                <MktDepartment />
            </div>
        </div>
    );
}