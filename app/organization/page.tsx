'use client';

import React from "react";
import DevDepartment from "../components/organization/dev_department";
import OrgDepartment from "../components/organization/org_department";
import MktDepartment from "../components/organization/mkt_department";

export default function Organization() {
    return (
        <div className="container mx-auto px-4 pt-6 mb-4">
            <div className="mt-12 md:mt-16 space-y-10 md:space-y-12">
                <DevDepartment />
                <OrgDepartment />
                <MktDepartment />
            </div>
        </div>
    );
}