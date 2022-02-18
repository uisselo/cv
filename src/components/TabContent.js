const TabContent = ({ content }) => {
  return (
    <div class="tab-content">
      <div class="tab-pane fade show active pt-5" role="tabpanel">
        {content}
      </div>
    </div>
  );
};

export default TabContent;
