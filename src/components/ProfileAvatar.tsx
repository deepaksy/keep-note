import Avatar from "@mui/material/Avatar"

const ProfileAvatar = ({name,src,value,children}:{name?:string,src?:string,value?:string,children?:React.ReactNode}):React.ReactElement => {
  return (
    <Avatar alt={name} src={src}>
        {children}
    </Avatar>
  )
}

export default ProfileAvatar