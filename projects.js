import React from 'react';

const Projects = () => {
  return (
    <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
      <div className="bg-white p-4 shadow-md rounded-lg">
        <h2 className="text-xl font-semibold">Project 1</h2>
        <p className="text-sm text-gray-500">Description of project 1.</p>
      </div>
      <div className="bg-white p-4 shadow-md rounded-lg">
        <h2 className="text-xl font-semibold">Project 2</h2>
        <p className="text-sm text-gray-500">Description of project 2.</p>
      </div>
      <div className="bg-white p-4 shadow-md rounded-lg">
        <h2 className="text-xl font-semibold">Project 3</h2>
        <p className="text-sm text-gray-500">Description of project 3.</p>
      </div>
    </div>
  );
};

export default Projects;
