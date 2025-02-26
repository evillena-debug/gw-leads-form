"use client";

import React, { useState, useEffect } from "react";
import WorkspaceHeader from "./WorkspaceHeader";
import FormTitle from "./FormTitle";
import UsernameField from "./UsernameField";
import NotificationOptions from "./NotificationOptions";
import TermsAndConditions from "./TermsAndConditions";
import SubmitButton from "./SubmitButton";
import regionsAndCities from "../../../data/regionsAndCities.json";

const AccessForm: React.FC = () => {
  const [customerDomain, setCustomerDomain] = useState("");
  const [customerEmail, setCustomerEmail] = useState("");
  const [countryCode, setCountryCode] = useState("CL"); // Default to Chile
  const [region, setRegion] = useState("");
  const [locality, setLocality] = useState("");
  const [postalCode, setPostalCode] = useState("");
  const [addressLine1, setAddressLine1] = useState("");
  const [organizationName, setOrganizationName] = useState("");
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [phoneNumber, setPhoneNumber] = useState("");
  const [alternateEmail, setAlternateEmail] = useState("");
  const [error, setError] = useState("");

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const contactName = `${firstName} ${lastName}`;
    // Lógica para enviar el formulario
    const customerData = {
      customerDomain,
      customerEmail,
      postalAddress: {
        countryCode,
        region,
        locality,
        postalCode,
        addressLine1,
      },
      organizationName,
      contactName,
      phoneNumber,
      alternateEmail,
    };
    console.log("Formulario enviado", customerData);
    // Aquí puedes hacer la llamada a la API para crear el cliente
  };

  const handleRegionChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
    setRegion(e.target.value);
    setLocality(""); // Reset locality when region changes
  };

  return (
    <div className="flex items-center justify-center h-full py-4">
      <div className="bg-white w-full max-w-[600px] p-6 max-md:w-full max-md:px-4 max-md:py-6 rounded-lg">
        <WorkspaceHeader />
        <div className="w-full h-px bg-zinc-200 mb-6" />
        <form onSubmit={handleSubmit} className="flex flex-col gap-4">
          <FormTitle />
          <UsernameField />
          <div className="flex flex-col gap-2">
            <label htmlFor="customerDomain" className="font-semibold">
              Cliente del dominio
            </label>
            <input
              type="text"
              id="customerDomain"
              value={customerDomain}
              onChange={(e) => setCustomerDomain(e.target.value)}
              placeholder="ej. midominio.com"
              className="p-2 border border-gray-300 rounded"
              required
            />
          </div>
          <div className="flex flex-col gap-2">
            <label htmlFor="organizationName" className="font-semibold">
              Nombre de la organización
            </label>
            <input
              type="text"
              id="organizationName"
              value={organizationName}
              onChange={(e) => setOrganizationName(e.target.value)}
              placeholder="ej. Mi Empresa S.A."
              className="p-2 border border-gray-300 rounded"
              required
            />
          </div>
          <div className="flex flex-col gap-2">
            <label htmlFor="customerEmail" className="font-semibold">
              Correo electrónico
            </label>
            <input
              type="email"
              id="customerEmail"
              value={customerEmail}
              onChange={(e) => setCustomerEmail(e.target.value)}
              placeholder="ej. usuario@midominio.com"
              className="p-2 border border-gray-300 rounded"
              required
            />
          </div>
          <div className="flex flex-col gap-2">
            <label htmlFor="countryCode" className="font-semibold">
              País/Región
            </label>
            <select
              id="countryCode"
              value={countryCode}
              onChange={(e) => setCountryCode(e.target.value)}
              className="p-2 border border-gray-300 rounded"
              required
            >
              <option value="CL">Chile</option>
            </select>
          </div>
          <div className="flex flex-col gap-2">
            <label htmlFor="addressLine1" className="font-semibold">
              Dirección
            </label>
            <input
              type="text"
              id="addressLine1"
              value={addressLine1}
              onChange={(e) => setAddressLine1(e.target.value)}
              placeholder="ej. Calle 123"
              className="p-2 border border-gray-300 rounded"
              required
            />
          </div>
          <div className="flex flex-col gap-2">
            <label htmlFor="postalCode" className="font-semibold">
              Código postal
            </label>
            <input
              type="text"
              id="postalCode"
              value={postalCode}
              onChange={(e) => setPostalCode(e.target.value)}
              placeholder="ej. 94043"
              className="p-2 border border-gray-300 rounded"
              required
            />
          </div>
          <div className="flex flex-col gap-2">
            <label htmlFor="region" className="font-semibold">
              Región
            </label>
            <select
              id="region"
              value={region}
              onChange={handleRegionChange}
              className="p-2 border border-gray-300 rounded"
              required
            >
              <option value="">Seleccione una región</option>
              {Object.entries(regionsAndCities.CL).map(([code, regionData]) => (
                <option key={code} value={code}>
                  {regionData.name}
                </option>
              ))}
            </select>
          </div>
          <div className="flex flex-col gap-2">
            <label htmlFor="locality" className="font-semibold">
              Comuna
            </label>
            <select
              id="locality"
              value={locality}
              onChange={(e) => setLocality(e.target.value)}
              className="p-2 border border-gray-300 rounded"
              required
            >
              <option value="">Seleccione una comuna</option>
              {region &&
                regionsAndCities.CL[region].localities.map((commune) => (
                  <option key={commune} value={commune}>
                    {commune}
                  </option>
                ))}
            </select>
          </div>
          <div className="flex flex-col gap-2">
            <label htmlFor="firstName" className="font-semibold">
              Nombre
            </label>
            <input
              type="text"
              id="firstName"
              value={firstName}
              onChange={(e) => setFirstName(e.target.value)}
              placeholder="ej. Juan"
              className="p-2 border border-gray-300 rounded"
              required
            />
          </div>
          <div className="flex flex-col gap-2">
            <label htmlFor="lastName" className="font-semibold">
              Apellido
            </label>
            <input
              type="text"
              id="lastName"
              value={lastName}
              onChange={(e) => setLastName(e.target.value)}
              placeholder="ej. Pérez"
              className="p-2 border border-gray-300 rounded"
              required
            />
          </div>
          <div className="flex flex-col gap-2">
            <label htmlFor="phoneNumber" className="font-semibold">
              Teléfono
            </label>
            <input
              type="text"
              id="phoneNumber"
              value={phoneNumber}
              onChange={(e) => setPhoneNumber(e.target.value)}
              placeholder="ej. +1234567890"
              className="p-2 border border-gray-300 rounded"
              required
            />
          </div>
          <div className="flex flex-col gap-2">
            <label htmlFor="alternateEmail" className="font-semibold">
              Dirección de correo electrónico alternativa
            </label>
            <input
              type="email"
              id="alternateEmail"
              value={alternateEmail}
              onChange={(e) => setAlternateEmail(e.target.value)}
              placeholder="ej. alternativo@otrodominio.com"
              className="p-2 border border-gray-300 rounded"
              required
            />
          </div>
          {error && <p className="text-red-500">{error}</p>}
          <NotificationOptions />
          <TermsAndConditions />
          <SubmitButton />
        </form>
      </div>
    </div>
  );
};

export default AccessForm;
