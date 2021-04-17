import Sidebar from '../Sidebar';

const DefaultLayout = ({ children }) => (
  <div className="root-container">
    <nav>
      <Sidebar />
    </nav>

    {children}
  </div>
);

export const getLayout = page => <DefaultLayout>{page}</DefaultLayout>;

export default DefaultLayout;
