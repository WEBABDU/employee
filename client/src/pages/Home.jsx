import React, { useCallback, useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";

import { Button } from "../components/Button/Button";
import { EmployeeCard } from "../components/EmployeeCard/EmployeeCard";
import { Filter } from "../components/Filter/Filter";
import { Spinner } from "../components/Spinner/Spinner";
import { useHttp } from "../hooks/useHttp";
import { notification } from "../services/notifications";

import { ReactComponent as AddIcon } from "./../assets/images/add-item.svg";

export const Home = () => {
  const navigate = useNavigate();

  const [searchText, setSearchText] = useState("");
  const [firstName, setFirstName] = useState("");
  const [refetchStatus, setRefetchStatus] = useState(false);

  const { request, loading } = useHttp();
  const [employees, setEmployees] = useState([]);

  const handleClick = () => {
    navigate("/create");
  };

  const handleClickFilter = (e) => {
    setFirstName(searchText);
  };

  const handleChange = (e) => {
    setSearchText(e.target.value);
  };

  const handleKeyPress = (e) => {
    if (e.key === "Enter") {
      handleClickFilter();
    }
  };

  const handleCancel = (e) => {
    setSearchText("");
    setFirstName("");
  };

  const handleClickCard = (id) => {
    navigate(`/update/${id}`);
  };

  const handleDelete = useCallback(
    async (id) => {
      try {
        await request(
          `${process.env.REACT_APP_API_ROOT}employees/${id}`,
          "DELETE",
          null
        );
      } catch (error) {}

      notification.success("Успешно удалено!");
      setRefetchStatus(!refetchStatus);
    },
    [refetchStatus, request]
  );

  const fetchEmployees = useCallback(async () => {
    try {
      const response = await request(
        `${process.env.REACT_APP_API_ROOT}employees?first_name=${firstName}`,
        "GET",
        null
      );
      setEmployees(response);
    } catch (error) {
      alert(error);
    }
  }, [request, firstName]);

  useEffect(() => {
    fetchEmployees();
  }, [fetchEmployees, refetchStatus]);

  if (loading) return <Spinner />;

  return (
    <div className="container">
      <div className="flex_center">
        <h1>Все сотрудники</h1>
      </div>
      <Filter
        onClick={handleClickFilter}
        onChange={handleChange}
        onCancel={handleCancel}
        handleKeyPress={handleKeyPress}
        value={searchText}
      />
      <div className="row">
        {employees.length &&
          employees.map((employee) => (
            <div className="col-md-2 col-lg-2" key={employee._id}>
              <EmployeeCard
                id={employee._id}
                first_name={employee.first_name}
                last_name={employee.last_name}
                middle_name={employee.middle_name}
                image={employee.avatar}
                handleClickCard={handleClickCard}
                onDelete={handleDelete}
              />
            </div>
          ))}
      </div>
      <div className="add_btn">
        <Button variant="add" prepend={<AddIcon />} onClick={handleClick} />
      </div>
    </div>
  );
};
