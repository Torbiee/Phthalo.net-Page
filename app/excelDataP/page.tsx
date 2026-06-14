"use client";

import * as XLSX from "xlsx";
import React, { useState, useEffect } from "react";
import Link from "next/link";

export default function excelDataProcessing() {
  const [excelData, setExcelData] = useState([]);
  const [search, setSearch] = useState("");

  const displayColumns = [
    "Record Number",
    "Title",
    "Status",
    "Assignees",
    "Created On",
  ];

  const handleFileAsync = async (e) => {
    try {
      const file = e.target.files[0];

      if (!file) {
        console.log("No file selected");
        return;
      }

      const data = await file.arrayBuffer();
      const workbook = XLSX.read(data);
      const firstSheetName = workbook.SheetNames[0];
      const sheet = workbook.Sheets[firstSheetName];
      const json = XLSX.utils.sheet_to_json(sheet, {
        defval: "",
        raw: false,
      });
      const filtered = json.filter((row) =>
        Object.values(row).some((value) => value != null),
      );
      setExcelData(filtered);
    } catch (error) {
      console.error("This Failed btw", error);
    }
  };

  useEffect(() => {
    console.log("excelData updated:", excelData.length);
  }, [excelData]);

  const filteredData = excelData.filter((row) => {
    const titleTest = String(row["Title"]).toLowerCase();

    if (search === "imprivata_group") {
      return titleTest.includes("imprivata") || titleTest.includes("sso");
    }
    if (search === "outlook_group") {
      return (
        titleTest.includes("outlook") ||
        titleTest.includes("archives") ||
        titleTest.includes("archive") ||
        titleTest.includes("email") ||
        titleTest.includes("mailbox")
      );
    }

    return [
      row["Record Number"],
      row["Title"],
      row["Status"],
      row["Assignees"],
      row["Created On"],
    ]
      .join(" ")
      .toLowerCase()
      .includes(search.toLowerCase());
  });

  // Filtered Data for Easy Display
  const imprivataCount = excelData.filter((row) => {
    const title = String(row["Title"]).toLowerCase();
    return title.includes("imprivata") || title.includes("sso");
  }).length;

  const outlook = excelData.filter((row) => {
    const title = String(row["Title"]).toLowerCase();
    return (
      title.includes("outlook") ||
      title.includes("archives") ||
      title.includes("archive") ||
      title.includes("email") ||
      title.includes("mailbox")
    );
  }).length;

  const zScopeCount = excelData.filter((row) =>
    String(row["Title"]).toLowerCase().includes("zscope"),
  ).length;

  const passwordResets = excelData.filter((row) =>
    String(row["Title"]).toLowerCase().includes("password"),
  ).length;

  const padIssues = excelData.filter((row) =>
    String(row["Title"]).toLowerCase().includes("pad"),
  ).length;

  const printer = excelData.filter((row) =>
    String(row["Title"]).toLowerCase().includes("printer"),
  ).length;

  const newHire = excelData.filter((row) =>
    String(row["Title"]).toLowerCase().includes("new hire"),
  ).length;

  const phone = excelData.filter((row) =>
    String(row["Title"]).toLowerCase().includes("phone"),
  ).length;

  const xactimate = excelData.filter((row) =>
    String(row["Title"]).toLowerCase().includes("xactimate"),
  ).length;

  const policyCenter = excelData.filter((row) =>
    String(row["Title"]).toLowerCase().includes("policy center"),
  ).length;

  const dayforceCount = excelData.filter((row) =>
    String(row["Title"]).toLowerCase().includes("dayforce"),
  ).length;

  const exceedCount = excelData.filter((row) =>
    String(row["Title"]).toLowerCase().includes("exceed"),
  ).length;

  const vpnCount = excelData.filter((row) =>
    String(row["Title"]).toLowerCase().includes("vpn"),
  ).length;

  const keeperCount = excelData.filter((row) =>
    String(row["Title"]).toLowerCase().includes("keeper"),
  ).length;

  return (
    <div className="bg-gray-700 font-serif">
      <div className="fixed inset-x-0 top-0 h-8 bg-slate-800 border-b border-slate-600">
        <div className="flex items-center justify-between gap-8 mt-1 px-4 sm:px-6">
          <div className="flex items-center gap-4">
            <h1 className="font-serif text-white">Jack Dockus</h1>
          </div>
          <div className="flex items-center gap-6">
            <Link className="text-sm/6 text-white" href="/">
              Home
            </Link>
            <Link className="text-sm/6 text-white" href="/ipLookUp">
              Link
            </Link>
            <Link className="text-sm/6 text-white" href="/excelDataP">
              Excel
            </Link>
          </div>
        </div>
      </div>

      <div className="bg-gray-700 mt-10 flex justify-center">
        <h1 font="serif">Enter an Excel Sheet</h1>
      </div>
      <div className="bg-gray-700 flex justify-center">
        <input
          className="outline-1 outline-gray-500 gap-4 w-fit"
          type="file"
          accept=".csv, .xls, .xlsx"
          id="inputdomel"
          onChange={handleFileAsync}
        />
      </div>
      <div className="flex justify-center">
        {excelData.length > 0 && (
          <input
            type="text"
            placeholder="Search"
            value={search}
            onChange={(e) => setSearch(e.target.value)}
            className="text-black p-2 rounded w-30 mt-5 outline-1 outline-black bg-white"
          />
        )}
      </div>

      {filteredData.length > 0 && (
        <div className="mt-5 overflow-x-auto p-3">
          <table className="border-4 border-sky-700">
            <thead>
              <tr>
                <th className="p-1 border border-sky-400">Issue</th>
                <th className="p-1 border border-sky-400"> # Count</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <th className="border border-sky-400 px-2">
                  <button onClick={(e) => setSearch("imprivata_group")}>
                    Imprivata
                  </button>
                </th>
                <td className="border border-sky-400 pl-2">{imprivataCount}</td>
              </tr>

              <tr>
                <th className="border border-sky-400 px-2">
                  <button onClick={(e) => setSearch("zscope")}>zScope</button>
                </th>
                <td className="border border-sky-400 pl-2">{zScopeCount}</td>
              </tr>

              <tr>
                <th className="border border-sky-400 px-2">
                  <button onClick={(e) => setSearch("password reset")}>
                    Password Resets
                  </button>
                </th>
                <td className="border border-sky-400 pl-2">{passwordResets}</td>
              </tr>

              <tr>
                <th className="border border-sky-400 px-2">
                  <button onClick={(e) => setSearch("pad")}>PAD</button>
                </th>
                <td className="border border-sky-400 pl-2">{padIssues}</td>
              </tr>

              <tr>
                <th className="border border-sky-400 px-2">
                  <button onClick={(e) => setSearch("printer")}>Printer</button>
                </th>
                <td className="border border-sky-400 pl-2">{printer}</td>
              </tr>

              <tr>
                <th className="border border-sky-400 px-2">
                  <button onClick={(e) => setSearch("new hire")}>
                    New Hire
                  </button>
                </th>
                <td className="border border-sky-400 pl-2">{newHire}</td>
              </tr>

              <tr>
                <th className="border border-sky-400 px-2">
                  <button onClick={(e) => setSearch("phone")}>Phone</button>
                </th>
                <td className="border border-sky-400 pl-2">{phone}</td>
              </tr>

              <tr>
                <th className="border border-sky-400 px-2">
                  <button onClick={(e) => setSearch("outlook_group")}>
                    Outlook
                  </button>
                </th>
                <td className="border border-sky-400 pl-2">{outlook}</td>
              </tr>

              <tr>
                <th className="border border-sky-400 px-2">
                  <button onClick={(e) => setSearch("xactimate")}>
                    Xactimate
                  </button>
                </th>
                <td className="border border-sky-400 pl-2">{xactimate}</td>
              </tr>

              <tr>
                <th className="border border-sky-400 px-2">
                  <button onClick={(e) => setSearch("policy center")}>
                    Policy Center
                  </button>
                </th>
                <td className="border border-sky-400 pl-2">{policyCenter}</td>
              </tr>

              <tr>
                <th className="border border-sky-400 px-2">
                  <button onClick={(e) => setSearch("dayforce")}>
                    Dayforce
                  </button>
                </th>
                <td className="border border-sky-400 pl-2">{dayforceCount}</td>
              </tr>

              <tr>
                <th className="border border-sky-400 px-2">
                  <button onClick={(e) => setSearch("exceed")}>Exceed</button>
                </th>
                <td className="border border-sky-400 pl-2">{exceedCount}</td>
              </tr>

              <tr>
                <th className="border border-sky-400 px-2">
                  <button onClick={(e) => setSearch("vpn")}>Cisco VPN</button>
                </th>
                <td className="border border-sky-400 pl-2">{vpnCount}</td>
              </tr>
            </tbody>
          </table>
        </div>
      )}

      {filteredData.length > 0 && (
        <div className="overflow-x-auto p-6">
          <p className="mb-3">Showing {filteredData.length} ticket(s)</p>
          <p> Rows loaded: {excelData.length}</p>

          <table className="min-w-full border border-gray-500">
            <thead>
              <tr className="">
                {displayColumns.map((column) => (
                  <th key={column} className="border border-gray-500">
                    {column}
                  </th>
                ))}
              </tr>
            </thead>
            <tbody>
              {filteredData.map((row, rowIndex) => (
                <tr key={rowIndex} className="hover:bg-slate-600">
                  {displayColumns.map((column) => (
                    <td
                      key={column}
                      className="border border-gray-500 px-3 py-2"
                    >
                      {String(row[column] ?? "")}
                    </td>
                  ))}
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      )}
    </div>
  );
}

// 	<pre>{JSON.stringify(excelData[0], null, 2)}</pre>
