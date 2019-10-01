import React from "react";

import {
  faChevronDown,
  FaInbox,
  FaRegCalendarAlt,
  FaRegCalendar,
  FaChevronDown
} from "react-icons/fa";

export const Sidebar = () => {
  return (
    <div className="sidebar" data-testid="sidebar">
      <ul className="sidebar_generic">
        <li>
          <span>
            <FaInbox />
          </span>
          <span>Inbox</span>
        </li>
        <li>
          <span>
            <FaRegCalendar />
          </span>
          <span>Today</span>
        </li>
        <li>
          <span>
            <FaRegCalendarAlt />
          </span>
          <span>Next 7 days</span>
        </li>
      </ul>
      <div className="sidebar_middle">
        <span>
          <FaChevronDown />
          <h2>Project</h2>
        </span>
      </div>
      <ul className="sidebar_projects">
        <li>Projects will be here</li>
      </ul>
      Add Project!
    </div>
  );
};
