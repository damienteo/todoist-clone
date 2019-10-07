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
      <ul className="sidebar__generic">
        <li data-testid="inbox" className="inbox">
          <span>
            <FaInbox />
          </span>
          <span>Inbox</span>
        </li>
        <li data-testid="today" className="today">
          <span>
            <FaRegCalendar />
          </span>
          <span>Today</span>
        </li>
        <li data-testid="next_7" className="next_7">
          <span>
            <FaRegCalendarAlt />
          </span>
          <span>Next 7 days</span>
        </li>
      </ul>
      <div className="sidebar__middle">
        <span>
          <FaChevronDown />
          <h2>Project</h2>
        </span>
      </div>
      <ul className="sidebar__projects">
        <li>Projects will be here</li>
      </ul>
      Add Project!
    </div>
  );
};
