import React from 'react';
import {
    RefreshControl,
    FlatList,
    Image,
    TouchableOpacity
} from 'react-native';
import { 
    Container,
    Header,
    Body,
    Content,
    Input,
    Text,
} from 'native-base';
import Styles from '../_utils/Styles'
import Colors from "../_utils/Colors";
import Businesses from '../_services/Businesses'

import { connect } from 'react-redux';


class BusinessesSearchScreen extends React.Component{
    constructor(props){
        super(props);
        this.state = {
            keyword: ""
        }
    }

    componentDidMount(){
        this.onLoad();
    }

    onLoad = () => {
        this.props.search({
            location: "new york",
            term: this.state.keyword
        });
    }

    onChangeKeyword = async (text) => {
        await this.setState({
            keyword: text
        });
        this.props.search({
            location: "new york",
            term: text
        });
    }

    onDetail = (id, title)=>this.props.navigation.navigate('BusinessesDetail', {
        businessesId: id,
        title: title
    });



    render(){
        return (
            <Container>
                <Header style={Styles.header} androidStatusBarColor={Colors.mainColor}>
                    <Body style={Styles.businessesSearchHeaderBody}>
                        <Input placeholder="Search" placeholderTextColor="#bdc3c7" style={Styles.businessesSearchInputSearch} value={this.state.keyword} onChangeText={this.onChangeKeyword} />
                    </Body>
                </Header>
                <Content style={Styles.content} refreshControl={
                        <RefreshControl refreshing={this.props.businessesSearch.isLoading} onRefresh={this.onLoad} />
                    }>
                        {(this.props.businessesSearch.data.length===0 && this.props.businessesSearch.isLoading === false) ? <>
                            <Text>No Data Found</Text>
                        </>:
                            <FlatList
                                numColumns={2}
                                data = {this.props.businessesSearch.data} 
                                keyExtractor = {(item)=>item.id.toString()}
                                renderItem = {({item})=>{
                                    return <TouchableOpacity onPress={this.onDetail.bind(this, item.id, item.name)} style={Styles.businessesSearchGrid}>
                                        <Image style={Styles.businessesSearchImage} source={{uri: item.image_url}} />
                                        <Text style={Styles.businessesSearchName}>{item.name}</Text>
                                        <Text>{item.review_count} Reviews</Text>
                                        <Text>{item.rating} Stars</Text>
                                    </TouchableOpacity>
                                }}
                            />
                        }
                </Content>
            </Container>
        );
    }
}

const mapStateToProps = (state) => {
    return {
        businessesSearch: state.businessesSearch,
    }
}
const mapDispatchToProps = {
    search: Businesses.search
};

export default connect(mapStateToProps, mapDispatchToProps)(BusinessesSearchScreen);
