import NoPortalExample from './NoPortalExample';
import PortalExample from './PortalExample';

export default function CreatePortal2() {
    return (
        <>
            <div className="clipping-container">
                <NoPortalExample />
            </div>
            <div className="clipping-container">
                <PortalExample />
            </div>
        </>
    );
}
