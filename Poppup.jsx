// Parent Component must be position: relative.  

export default = styled.div`
  position: absolute;
  display: block;
  background-color: #444;
  color: #fff;
  padding: 0.15rem 0rem 0.15rem 0rem;
  font-weight: normal;
  width: 100%;
  border-radius: 0 0 3px 3px;
  bottom: -10.5rem;
  left: 50%;
  transform: translateX(-50%) translateY(-60%);
  opacity: 0;
  transition: all 350ms;
  justify-content: center;

  ${StyledServerEvents}:hover & {
    opacity: 1;
    transform: translateX(-50%) translateY(-50%);
    z-index: 100;
    box-shadow: 10px 5px 5px #222;
    box-shadow: 3px 3px 2px #222, 3px 0 2px #222;
  }
`

