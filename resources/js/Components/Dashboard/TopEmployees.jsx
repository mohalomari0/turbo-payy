import React from 'react';
import { Link } from '@inertiajs/react';
import { Avatar, Box, Card, CardHeader, Divider, Typography } from '@mui/material';
import { styled } from '@mui/material/styles';

const StyledCard = styled(Card)(({ theme }) => ({
  borderRadius: '12px',
  boxShadow: '0 1px 3px 0 rgba(0, 0, 0, 0.1)',
  height: '100%',
  display: 'flex',
  flexDirection: 'column'
}));

const EmployeeItem = styled(Box)(({ theme }) => ({
  display: 'flex',
  alignItems: 'center',
  padding: theme.spacing(2),
  margin: theme.spacing(0.5),
  borderRadius: '8px',
  backgroundColor: theme.palette.grey[50],
  transition: 'all 0.3s ease',
  '&:hover': {
    backgroundColor: theme.palette.grey[100]
  }
}));

const EmployeeRank = styled(Typography)(({ theme }) => ({
  fontFamily: 'Tajawal-Bold',
  color: theme.palette.primary.main,
  minWidth: '24px',
  marginRight: theme.spacing(2)
}));

const EmployeeAmount = styled(Box)(({ theme }) => ({
  backgroundColor: theme.palette.primary.light,
  color: theme.palette.primary.main,
  borderRadius: '20px',
  padding: theme.spacing(0.5, 2),
  fontFamily: 'Tajawal-Medium',
  fontSize: '0.875rem'
}));

export default function TopEmployees({ employees }) {
  return (
    <StyledCard>
      <CardHeader
        title={
          <Typography variant="h6" sx={{ fontFamily: 'Tajawal-Bold', color: '#002847' }}>
            TOP TIPPED EMPLOYEES
          </Typography>
        }
        action={
          <Link 
            href={route('employees.index')} 
            style={{ 
              color: '#888af2',
              fontFamily: 'Tajawal-Medium',
              fontSize: '0.875rem',
              textDecoration: 'none'
            }}
          >
            View All
          </Link>
        }
        sx={{ pb: 0 }}
      />
      
      <Divider />
      
      <Box sx={{ p: 2, flex: 1 }}>
        {employees.map((employee, index) => (
          <Link 
            key={employee.id} 
            href={route('employees.show', employee.id)}
            style={{ textDecoration: 'none' }}
          >
            <EmployeeItem>
              <EmployeeRank>
                {index + 1}
              </EmployeeRank>
              
              <Avatar
                sx={{
                  bgcolor: '#eef2ff',
                  color: '#888af2',
                  width: 40,
                  height: 40,
                  mr: 2
                }}
              >
                {employee.name.charAt(0)}
              </Avatar>
              
              <Box sx={{ flex: 1 }}>
                <Typography 
                  variant="subtitle1" 
                  sx={{ 
                    fontFamily: 'Tajawal-Medium', 
                    color: '#1e293b',
                    mb: 0.5
                  }}
                >
                  {employee.name}
                </Typography>
                <Typography 
                  variant="body2" 
                  sx={{ 
                    color: 'text.secondary',
                    fontFamily: 'Tajawal-Regular'
                  }}
                >
                  {employee.role}
                </Typography>
              </Box>
              
              <EmployeeAmount>
                {employee.amount}
              </EmployeeAmount>
            </EmployeeItem>
          </Link>
        ))}
      </Box>
    </StyledCard>
  );
}