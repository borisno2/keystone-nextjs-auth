import ejs from 'ejs';

const template = `
const keystoneConfig = require('@keystone-6/core/___internal-do-not-use-will-break-in-patch/admin-ui/next-config').config;

module.exports = {
    ...keystoneConfig,
    basePath: '<%= keystonePath || '' %>'
};`;
export const nextConfigTemplate = ({ keystonePath }: { keystonePath: string }) => {
  const nextConfigOut = ejs.render(template, { keystonePath });

  return nextConfigOut;
};
