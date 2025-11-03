import { connect } from "datocms-plugin-sdk";
import "datocms-react-ui/styles.css";
import { render } from "./utils/render";
import { AssetDeletionSidebar } from "./components/AssetDeletionSidebar.tsx";

connect({
  uploadSidebarPanels() {
    return [
      {
        id: "deleteFromAllEnvs",
        label: "Delete from all environments",
      },
    ];
  },

  renderUploadSidebarPanel(_id, ctx) {
    render(<AssetDeletionSidebar ctx={ctx} />);
  },
});
